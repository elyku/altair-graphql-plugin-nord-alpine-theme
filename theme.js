class NordAlpineTheme {
  initialize(ctx) {
    ctx.theme.add("alpine", {
      colors: {
        primary: "#D08770",
        secondary: "#BF616A",
        bg: "#3B4252",
        offBg: "#434C5E",
        font: "#E5E9F0",
        offFont: "#D8DEE9",
        border: "#E5E9F0",
        offBorder: "#D8DEE9",
        headerBg: "#3B4252",
      },
      shadow: {
        color: "#434C5E",
        opacity: 0.1,
      },
      editor: {
        colors: {
          comment: "#4C566A",
          string: "#A3BE8C",
          number: "#A3BE8C",
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
  }

  async destroy() {}
}

window.AltairGraphQL.plugins.NordAlpineTheme = NordAlpineTheme;
