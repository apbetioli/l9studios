const Theme = {
  logo: <span>Moving Platform Maker 2D</span>,
  project: {
    link: "https://github.com/apbetioli/mpm2d-docs",
  },
  docsRepositoryBase: "https://github.com/apbetioli/mpm2d-docs/tree/main/docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – MPM2D",
    };
  },
  footer: {
    component: false,
  },
};

export default Theme;
