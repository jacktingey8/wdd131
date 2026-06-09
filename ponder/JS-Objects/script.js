const aCourse = {
    name: "Intro to Ladders",
    code: "LDR101",
    sections: [
        {
            sectionNum: 1,
            roomNum: "3",
            enrolled: 7,
            days: "MW",
            instructor: "Dohn Joe"
        },
        {
            sectionNum: 2,
            roomNum: "5",
            enrolled: 4,
            days: "SS",
            instructor: "Kim Gordon"
        }
    ],
     enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
console.log("PLESASE");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
          

