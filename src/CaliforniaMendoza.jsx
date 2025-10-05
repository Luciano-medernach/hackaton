import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export const CaliforniaMendoza = () => {
  const rows = [
    {
      category: "Climate",
      info: "They share a Mediterranean or semi-arid climate, characterized by cold winters and dry, hot summers with plenty of sunshine.",
    },
    {
      category: "Geographical Characteristics",
      info: "The geography of both is dominated by the presence of imposing mountain ranges. Mendoza lies at the foot of the Andes Mountains, while California is flanked by the Sierra Nevada and the Coast Ranges.",
    },
    {
      category: "Agriculture",
      info: "They are agricultural powerhouses. They excel in the production of fruits, vegetables, and nuts.",
    },
    {
      category: "Wine Production",
      info: "Both are the most important wine-producing regions of their respective countries.",
    },
    {
      category: "Type of Irrigation",
      info: "Due to their dry climate, both California and Mendoza rely on artificial irrigation systems fed by mountain rivers. This forces them to face constant challenges related to water management and scarcity.",
    },
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "900px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "bold", my: 2 }}
      >
        Comparison
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.800" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Category
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Mendoza & California
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "grey.100" },
                }}
              >
                <TableCell>{row.category}</TableCell>
                <TableCell colSpan={2} sx={{ fontStyle: "italic" }}>
                  {row.info}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
