import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#2e2e2e",
    color:"#fafafa"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  completeBg:{
    backgroundColor:"green"
  },
  inProgressBg:{
      backgroundColor:"blue"
  }
});

const Status = ({status}) => {
  if (status === true) {
    return (
      <Text style={styles.completeBg}>
        Complete
      </Text>
    );
  } else {
    return (
      <Text style={styles.inProgressBg}>InProgress</Text>
    );
  }
};

const ProjectsDocument = ({ projects }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {projects &&
            projects.map((project) => {
              return (
                <Text key={project.id}>
                  {project.projectTitle} - {project.course} -
                  {project.authorFirstName} - <Status status = {project.status}/>
                </Text>
              );
            })}
        </View>
      </Page>
    </Document>
  );
};

export default ProjectsDocument;
