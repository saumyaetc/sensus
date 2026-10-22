module.exports = {
  hooks: {
    readPackage(pkg) {
      // Better Auth does not need schema-generation or test tooling at runtime.
      if (pkg.name === "better-auth") {
        for (const name of ["drizzle-kit", "vitest"]) {
          delete pkg.peerDependencies?.[name];
          delete pkg.peerDependenciesMeta?.[name];
        }
      }
      return pkg;
    },
  },
};
