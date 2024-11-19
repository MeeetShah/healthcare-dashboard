import React, { useState } from "react";
import { Button, TextField, Typography, Box, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! Check console for details.");
    console.log(formData);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #8e44ad, #3498db)",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
      >
        <Paper
          elevation={6}
          style={{
            padding: "40px",
            borderRadius: "20px",
            maxWidth: "500px",
            background: "white",
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            gutterBottom
            style={{ fontWeight: "bold", color: "#2c3e50" }}
          >
            Healthcare Dashboard
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            gutterBottom
            style={{ marginBottom: "20px", color: "#7f8c8d" }}
          >
            Please fill in the details below
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
              style={{
                borderRadius: "5px",
              }}
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
            />
            <Button
              variant="contained"
              component="label"
              style={{
                backgroundColor: "#3498db",
                color: "white",
                borderRadius: "25px",
                textTransform: "capitalize",
              }}
            >
              Upload File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>

            {/* Display the uploaded file name */}
            {formData.file && (
              <Typography
                variant="body1"
                style={{
                  color: "#8e44ad",
                  fontStyle: "italic",
                }}
              >
                Uploaded: {formData.file.name}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#8e44ad",
                color: "white",
                borderRadius: "25px",
                padding: "10px 20px",
                textTransform: "uppercase",
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );
};

export default Dashboard;
