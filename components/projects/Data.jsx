import Project1 from "../../assets/super_img.jpg";
import Project2 from "../../assets/chicken.jpg";
import Project3 from "../../assets/prof.png";
import Project4 from "../../assets/Federated_learning.jpg";

export const projectsData = [
    {
        id: 1,
        image: Project1,
        link: "https://github.com/kagHarsh/Image_Super_Resolution_using_GAN",
        title: "Image Super Resolution Using GAN",
        category: "Deep Learning",
        techstack: "Generative adversarial network",
    },
    {
        id: 2,
        image: Project2,
        link: "https://www.google.co.in/",
        title: "Chicken Disease Image Classification",
        category: "Deep Learning",
        techstack: "",
    },
    {
        id: 3,
        image: Project3,
        title: "My Portfolio",
        category: "Web",
        techstack: "React",
    },
    {
        id: 4,
        image: Project4,
        title: "Federated learning on heterogeneous medical dataset",
        category: "Ongoing",
        techstack: "",
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Deep Learning",
    },
    {
        name: "Web",
    },
    {
        name: "Ongoing",
    },
];