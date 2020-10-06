import { StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  downloadBtn: {
    padding: "4pt",
    borderRadius: "5pt",
    color: "white",
    background: "linear-gradient(to Right, #2196F3, #0097a7)",
    textTransform: "uppercase",
    display: "inline-block",
    marginBottom: "20pt",
  },
  projectADownloadBtn: {
    padding: "4pt",
    borderRadius: "5pt",
    color: "white",
    background: "linear-gradient(to Right, #9036F9, #4036F9)",
    textTransform: "uppercase",
    display: "inline-block",
    marginBottom: "20pt",
  },
  page: {
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginBottom: "20pt",
  },
  tukLogo: {
    height: "90pt",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  projectSummary: {
    textTransform: "uppercase",
    marginBottom: "9pt",
    paddingBottom: "9pt",
    borderBottom: "2pt solid black",
    fontSize: "14pt",
  },
  completeBg: {
    backgroundColor: "#00C853",
    textTransform: "unset",
    color: "white",
  },
  inProgressBg: {
    backgroundColor: "#2196F3",
    textTransform: "unset",
    color: "white",
  },
});

export default styles;
