// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import projects from "../../public/projects.json";

export default function getProjects(req, res) {
    res.status(200).json(projects);
}
