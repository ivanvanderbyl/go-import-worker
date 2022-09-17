type Pkg = {
  pkg: string;
  repoPath: string;
};

export const packages: Record<string, Pkg> = {
  "/wingtip": {
    pkg: "ivan.dev/wingtip",
    repoPath: "ivanvanderbyl/wingtip",
  },
};
