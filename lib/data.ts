import rawData from "./safewave-data.json";

export interface Alumno {
  id: number;
  nom: string;
  edad: string;
  niv: string;
  prog: string;
  hor: string;
  paq: string;
  us: number;
  est: string;
}

export interface ClaseCompletada {
  fec: string;
  hora: string;
  niv: string;
  not: string;
}

export interface AlumnoConClases extends Alumno {
  clases: ClaseCompletada[];
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function matchesStudent(nin: string, nom: string): boolean {
  if (nin.includes(",") || nin.toLowerCase().includes(" y ")) return false;
  const ninN = normalize(nin);
  const nomN = normalize(nom);
  if (ninN === nomN) return true;
  // handle "Matías S" → matches agenda "Matías"
  const firstWord = nomN.split(" ")[0];
  if (ninN === firstWord && firstWord.length > 2) return true;
  return false;
}

const data = rawData as {
  alumnos: (Alumno & { zona: string; fecha: string; pag: number; tot: number; reno: string; con: string; not: string })[];
  agenda: { id: number; nin: string; fec: string; hora: string; rep: string; niv: string; est: string; not: string }[];
};

export function getAlumnoPorId(id: number): AlumnoConClases | null {
  const alumno = data.alumnos.find((a) => a.id === id);
  if (!alumno) return null;

  const clases: ClaseCompletada[] = data.agenda
    .filter((e) => e.est === "Completada" && matchesStudent(e.nin, alumno.nom))
    .map((e) => ({ fec: e.fec, hora: e.hora, niv: e.niv, not: e.not }))
    .sort((a, b) => new Date(b.fec).getTime() - new Date(a.fec).getTime());

  return {
    id: alumno.id,
    nom: alumno.nom,
    edad: alumno.edad,
    niv: alumno.niv,
    prog: alumno.prog,
    hor: alumno.hor,
    paq: alumno.paq,
    us: alumno.us,
    est: alumno.est,
    clases,
  };
}

export function getAllAlumnos(): Alumno[] {
  return data.alumnos.map((a) => ({
    id: a.id,
    nom: a.nom,
    edad: a.edad,
    niv: a.niv,
    prog: a.prog,
    hor: a.hor,
    paq: a.paq,
    us: a.us,
    est: a.est,
  }));
}
