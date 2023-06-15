import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStudents } from './actions/studentAction';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import AddStudentForm from './components/StudentManagement/AddStudentForm';
import StudentList from './components/StudentManagement/StudentList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Student Management</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <AddStudentForm />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StudentList />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
