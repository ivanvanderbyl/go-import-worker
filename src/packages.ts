type Pkg = {
  pkg: string;
  repoPath: string;
};

export const packages: Record<string, Pkg> = {
  "/custompkg": {
    pkg: "ivan.dev/custompkg",
    repoPath: "ivanvanderbyl/custompkg",
  },
  "/wingtip": {
    pkg: "ivan.dev/wingtip",
    repoPath: "ivanvanderbyl/wingtip",
  },
};
