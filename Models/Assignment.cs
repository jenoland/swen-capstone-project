using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace swen_capstone_project.Models
{
    public class Assignment
    {
        public int Id { get; set; }
        public User? Creator { get; set; }
        public string? Name { get; set; }
        public string? QuestionOne { get; set; }
        public string? QuestionTwo { get; set; }
        public string? QuestionThree { get; set; }
        public string? QuestionFour { get; set; }
        public string? AnswerOne { get; set; }
        public string? AnswerTwo { get; set; }
        public string? AnswerThree { get; set; }
        public string? AnswerFour { get; set; }
        public DateTime Created { get; set; }
    }

    public enum UserType
    {
        Teacher,
        Student
    }
}
