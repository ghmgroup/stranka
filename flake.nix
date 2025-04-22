{
  description = "flake for a static nextjs site with tailwind & shadcn/ui using bun";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; config = { allowUnfree = true; }; };
      in {
        devShell = pkgs.mkShell {
          name = "nextjs-static-bun-shell";
          buildInputs = with pkgs; [
            bun
            nodePackages_latest.typescript-language-server
            tailwindcss-language-server
          ];
        };
      }
    );
}

