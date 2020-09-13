import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import styles from "./pdfStyles";

const ProjectStatus = ({ status }) => {
  if (status === true) {
    return <Text style={styles.completeBg}>Complete</Text>;
  } else {
    return <Text style={styles.inProgressBg}>InProgress</Text>;
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
                  {project.authorFirstName} -{" "}
                  <ProjectStatus status={project.status} />
                </Text>
              );
            })}
        </View>
      </Page>
    </Document>
  );
};

export default ProjectsDocument;
