console.log('Starting up');

gProjects = [
    {
        "id": "1.ball-board",
        "name": "Capture That Balls",
        "title": "ball version of sneak",
        "desc": "Pure vanilla JS project, built in 3 days.<br> Remember the Nokia's legendery Sneak game? same but different. try it ",
        "url": "projects/1.ball-board",
        "publishedAt": "31/3/21",
        "labels": ["vanilla JS"],
        "time": "Built in 3 days"
    },

    {
        "id": "2.MineSweeper",
        "name": "MineSweeper",
        "title": "SHULE MOKSHIM..",
        "desc": "Pure vanilla JS project, built in 3 days.<br> The classic old and tricky Windows game. also known as SHULE MOKSHIM",
        "url": "projects/2.MineSweeper",
        "repoUrl": "https://github.com/idanlevi507/MineSweeper",
        "prodUrl": "https://idanlevi507.github.io/MineSweeper/",
        "publishedAt": "11/4/21",
        "labels": ["vanilla JS"],
        "time": "Built in 3 days"
    },
    {
        "id": "3.touch-nums",
        "name": "Touch Numbers",
        "title": "Speed touch game",
        "desc": "Pure vanilla JS project, built in 3 days.<br> ",
        "url": "projects/3.touch-nums",
        "publishedAt": "21/03/21",
        "labels": ["vanilla JS"],
        "time": "Built in 3 days"
    },

]


function initPage() {
    renderProjects();
    renderModel()

}

function renderProjects() {
    var idx = 0;
    var htmlstring = gProjects.map(function (proj) {
        idx++;
        return `        
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="projects/${proj.id}/img/Screenshot.png" alt="">
          </a>
                <div class="portfolio-caption">
                    <h4>${proj.name}</h4>
                    <p class="text-muted">${proj.title}</p>
                    <p class="label">${proj.labels}</p>
                    <p class="label">${proj.time}</p>
                </div>
        </div>`
    })
    htmlstring.join('');
    document.getElementById('spot').innerHTML = htmlstring;
}

function renderModel() {
    var htmlstring = gProjects.map(function (proj,idx) {
        console.log(proj);
        return `<div class="portfolio-modal modal fade" id="portfolioModal${idx+1}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <a href="${proj.prodUrl}" target="_blank"><img class="img-fluid d-block mx-auto" src="projects/${proj.id}/img/Screenshot.png" alt=""></a>
                    <p class="item-intro text-muted">${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${proj.publishedAt} </li>
                      <li>Client: Threads</li>
                      <li>Category: ${proj.labels}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                    <button class="btn btn-primary" type="button" onclick="location.href = 'https://github.com/idanlevi507/MineSweeper';target='_blank'" >
                      
                      open github repo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })
    htmlstring.join('');
    document.getElementById('modal-spot').innerHTML = htmlstring;
}


