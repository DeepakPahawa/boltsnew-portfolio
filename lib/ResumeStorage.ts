export class ResumeStorage {
  private static instance: ResumeStorage;
  private resumeContent: string = `
   WORK EXPERIENCE
 Software Engineer
 Xelpmoc Design and Tech Ltd
 08/2020 - Present, Bangalore
 Worked on multiple projects with various technologies
 such as React Js, Redux
 Followed scrum proceess which includes Platform
 optimization, Code review.
 Internship
 Xelpmoc Design and Tech Ltd.
 01/2020 - 07/2020, Bangalore
 Been part of intense bootcamp on software lifecycle,
 git, HTML, CSS, React Js, Redux.
 Worked on Organization Interanet, where user can
 keep track of their work such as Fill Timesheet, apply
 and check Leave status, Update his profile and much
 more.
 EDUCATION
 Bachelor of Engineering
 Rns Institute of Technology
 08/2020, 6.0 CGPA
 12th
 Holy Point Academy
 04/2014, 65%
 10th
 Holy Point Academy
 04/2012, 8.2 CGPA
 SKILLS
 React Redux Data structure Algorithm
 Javascript Sql Java HTML5 CSS
 PROJECTS
 The Star in me (05/2020 - Present)
 Working as Frontend-Developer in React Js, Redux for the
 platform.
 Developed various modules from scratch
 Designing and Integrated Back-end API
 Worked on Dashboard side (for admin) and Website (for user)
 Intranet (02/2020 - 04/2020)
 Worked as Frontend-Developer (React Js) for building Intranet.
 Followed scrum process with Timesheet, and Leave
 assignment with Code Review.
 Developed modules for the application and also integrated
 Back-end API
 ACHIEVEMENTS
 Hackerank Gold Level (5 stars) in problem solving
 LANGUAGES
 English
 Professional Working
 Proficiency
 Hindi
 Native or Bilingual Proficiency
 INTERESTS
 Solving the real world problem
 Developing new things puzzle solvin
  `;

  private constructor() {}

  public static getInstance(): ResumeStorage {
    if (!ResumeStorage.instance) {
      ResumeStorage.instance = new ResumeStorage();
    }
    return ResumeStorage.instance;
  }

  public setResumeContent(content: string): void {
    this.resumeContent = content;
  }

  public getResumeContent(): string {
    return this.resumeContent;
  }
}
