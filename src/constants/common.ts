export const PATH = {
  main: "/",
  aboutMe: {
    root: "/about_me",
    id: '/about_me/:id',
    aboutMeId: (id: string | number) => `/about_me/${id}`,
  },
  projects: {
    root: "/projects",
    id: '/projects/:id',
    projectsId: (id: string | number) => `/projects/${id}`,
  },
};
