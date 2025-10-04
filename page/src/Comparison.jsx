import { Grid, Card, CardContent, Typography } from "@mui/material";

export const Comparison = () => {
  return (
    <Grid container spacing={2} className="mt-8">
      <Grid className="w-xs">
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Mendoza
            </Typography>
            <Typography>Clima: semiárido</Typography>
            <Typography>Industria: vino y agricultura</Typography>
            <Typography>Población: ~2M</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid className="w-xs">
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              California
            </Typography>
            <Typography>Clima: mediterráneo</Typography>
            <Typography>Industria: tecnología y agricultura</Typography>
            <Typography>Población: ~39M</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
