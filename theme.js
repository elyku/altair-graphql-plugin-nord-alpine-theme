class NordAlpineTheme {
  initialize(ctx) {
    ctx.theme.add("NordAlpineTheme", {
      colors: {
        primary: "#D08770",
        secondary: "#BF616A",
        bg: "#2E3440",
        offBg: "#3B4252",
        font: "#E5E9F0",
        offFont: "#D8DEE9",
        border: "#E5E9F0",
        offBorder: "#D8DEE9",
        headerBg: "#2E3440",
      },
      shadow: {
        color: "#434C5E",
        opacity: 0.1,
      },
      editor: {
        colors: {
          comment: "#4C566A",
          string: "#A3BE8C",
          number: "#B48EAD",
          variable: "#EBCB8B",
          keyword: "#B48EAD",
          atom: "#BF616A",
          attribute: "#EBCB8B",
          property: "#D8DEE9",
          punctuation: "#B48EAD",
          definition: "#EBCB8B",
          builtin: "#D08770",
          cursor: "#D8DEE9",
        },
      },
    });

    ctx.theme.enable("NordAlpineTheme", true);
  }

  async destroy() {}
}

window.AltairGraphQL.plugins.NordAlpineTheme = NordAlpineTheme;
