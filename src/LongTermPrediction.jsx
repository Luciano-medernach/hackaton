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

export const LongTermPrediction = () => {
  const rows = [
    {
      zone: "General Zone",
      pred2030: -7.201211,
      pred2035: -21.165831,
      pred2040: -35.10927,
      pred2045: -49.103033,
      pred2050: -63.067654,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto my-12">
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: 4,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "grey.800" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Analyzed Zone
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                2030 (mm)
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                2035 (mm)
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                2040 (mm)
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                2045 (mm)
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                2050 (mm)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "grey.100" },
                }}
              >
                <TableCell>{row.zone}</TableCell>
                <TableCell>{row.pred2030.toFixed(2)}</TableCell>
                <TableCell>{row.pred2035.toFixed(2)}</TableCell>
                <TableCell>{row.pred2040.toFixed(2)}</TableCell>
                <TableCell>{row.pred2045.toFixed(2)}</TableCell>
                <TableCell>{row.pred2050.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
