import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import styles from "./pdfStyles";
import TUK_logo from "../../images/TUK_logo.jpg";

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
      <Page size="A4" style={styles.header}>
        <View style={styles.headerText}>
          <Image src={TUK_logo} style={styles.tukLogo}></Image>
        </View>
        <Text style={styles.headerText}>THE TECHNICAL UNIVERSITY OF KENYA</Text>
        <Text style={styles.headerText}>
          SCHOOL OF COMPUTING AND INFORMATION TECHNOLOGY
        </Text>
        <Text style={styles.headerText}>PROJECTS' PROGRESS REPORT</Text>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {projects &&
            projects.map((project) => {
              return (
                <Text key={project.id} style={styles.projectSummary}>
                  {project.authorFirstName} {project.authorLastName} -{" "}
                  {project.course} - {project.projectTitle} -{" "}
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
