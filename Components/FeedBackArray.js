import FeedBack from "@/Components/FeedBack"


export default function FeedBackArray(){
const persons = [
  {
    name: "Brown Garcia",
    role: "Full Stack Developer in XReact Tech",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
    image: "/person1.jpg"
  },
  {
    name: "Jane Doe",
    role: "UI/UX Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
    image: "/person2.jpg"
  }
];
return(
<FeedBack persons={persons}/>
);
}
