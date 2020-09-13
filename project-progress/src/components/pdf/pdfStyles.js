import { StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#2e2e2e",
    color: "#fafafa",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  downloadBtn: {
    padding: "4px",
    borderRadius: "5px",
    color: "white",
    background: "linear-gradient(to Right, #2196F3, #0097a7)",
    textTransform: "uppercase",
    display: "inline-block",
    marginBottom: "20px"

  },
  completeBg: {
    backgroundColor: "green",
  },
  inProgressBg: {
    backgroundColor: "blue",
  },
});

export default styles;
