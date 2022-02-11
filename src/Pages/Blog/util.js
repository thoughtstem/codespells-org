import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MarkdownToJsx from 'markdown-to-jsx';
import { Page } from "../../Components/Page"


export function BlogPost({ title, date, children }) {
  return (<>
    <Container maxWidth="md" style={{ marginTop: 20, position: "relative", zIndex: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card style={{ marginBottom: 10 }}>
            <CardHeader title={title} subheader={date}>
            </CardHeader>
            <CardContent>
              {children}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>)
}
