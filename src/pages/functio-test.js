// Education
// const handleChange = (index, field, value) => {
//   const updatedEducation = [...education];
//   updatedEducation[index][field] = value;
//   setEducation(updatedEducation);
// };

// const handleAddEntry = (index) => {
//   const newSections = [...education];
//   newSections.splice(index + 1, 0, {
//     university: "University",
//     degree: "Degree and Field of Study",
//     cgpa: "CGPA",
//     date: "Date Period",
//   });
//   setEducation(newSections);
//   setShowButton({});
// };

// const handleRemoveEntry = (index) => {
//   const newSections = education.filter((_, i) => i !== index);
//   setEducation(newSections);
//   setShowButton({});

//   // const newSections = [...education];
//   // newSections.splice(index, 1);
//   // setEducation(newSections);
//   // setShowButton({});
// };

// <Stack sx={{ mt: "30px" }}>
//   <Typography
//     sx={{
//       textAlign: "center",
//       fontWeight: "900",
//       fontFamily: "Volkhov, Arial, Helvetica, sans-serif",
//       textTransform: "uppercase",
//       fontSize: "20px",
//       lineHeight: "26px",
//     }}
//   >
//     Education
//   </Typography>
//   <Divider sx={{ borderColor: "black" }} />
//   {education.map((entry, index) => (
//     <Stack
//       onClick={() => {
//         // setClickedIndex(index);
//         setShowButton((prev) => ({ ...prev, [index]: true }));
//       }}
//       key={index}
//       direction="row"
//       justifyContent="space-between"
//     >
//       {showButton[index] && (
//         <Stack direction="row">
//           <Button variant="contained" onClick={() => handleAddEntry(index)}>
//             Add Section
//           </Button>
//           <Button variant="contained" onClick={() => handleRemoveEntry(index)}>
//             Delete Section
//           </Button>
//         </Stack>
//       )}
//       <Box>
//         <Typography
//           component="p"
//           sx={{
//             mt: "5px",
//             color: "rgb(111, 120, 120)",
//             fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
//             textTransform: "capitalize",
//             fontSize: "12px",
//             lineHeight: "17px",
//           }}
//         >
//           {entry.university}
//         </Typography>
//         <Typography
//           component="p"
//           sx={{
//             mt: "5px",
//             color: "rgb(111, 120, 120)",
//             fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
//             textTransform: "capitalize",
//             fontSize: "12px",
//             lineHeight: "17px",
//           }}
//         >
//           {entry.degree}
//         </Typography>
//       </Box>
//       <Box>
//         <Typography
//           component="p"
//           sx={{
//             mt: "5px",
//             color: "rgb(111, 120, 120)",
//             fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
//             textTransform: "capitalize",
//             fontSize: "12px",
//             lineHeight: "17px",
//           }}
//         >
//           {entry.cgpa}
//         </Typography>
//         <Typography
//           component="p"
//           sx={{
//             mt: "5px",
//             color: "rgb(111, 120, 120)",
//             fontFamily: "PT Sans, Arial, Helvetica, sans-serif",
//             textTransform: "capitalize",
//             fontSize: "12px",
//             lineHeight: "17px",
//           }}
//         >
//           {entry.date}
//         </Typography>
//       </Box>
//     </Stack>
//   ))}
// </Stack>;

// const [education, setEducation] = useState([
//     {
//       university: "University",
//       degree: "Degree and Field of Study",
//       cgpa: "CGPA",
//       date: "Date Period",
//     },
//   ]);

PDF - Resume;
// import { useReactToPrint } from "react-to-print";
{
  /* <button onClick={handlePrint}>Print article</button>; */
}
// ref = { componentRef };
// const componentRef = useRef();
// const handlePrint = useReactToPrint({
//   content: () => componentRef.current,
// });
