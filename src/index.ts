import { HTMLResponse } from "@worker-tools/html";
import { baseLayout, importClause, pkgURL, sourceClause } from "./helpers";
import { packages } from "./packages";

export interface Env {}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    let url = new URL(request.url);

    let pkg = packages[url.pathname];

    if (pkg == null) {
      let repo = url.pathname;
      if (repo.startsWith("/")) {
        repo = repo.slice(1);
      }

      pkg = {
        pkg: `ivan.dev/${repo}`,
        repoPath: `ivanvanderbyl/${repo}`,
      };
    }

    return new HTMLResponse(
      baseLayout(
        importClause(pkg.pkg, pkg.repoPath),
        sourceClause(pkg.pkg, pkg.repoPath),
        pkgURL(pkg.pkg)
      )
    );
  },
};
