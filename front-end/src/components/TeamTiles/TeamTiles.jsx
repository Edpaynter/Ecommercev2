import React from "react";

const TeamTiles = () => {
  const teamInfo = [
    {
      name: "Marvin Capps",
      position: "Broker/Owner",
      email: 'MARVINCAPPSREALTY@GMAIL.COM',
      phone: "561.568.7465",
      photo: "assets/img/company/marvincappsheadshot.jpg",
      states: ["PA", "NY", "NJ", "DE", "FL", "MD"],
    },
    {
      name: "Yasmeen Lockett",
      email: 'yasmeenlockett@gmail.com',
      position: "Agent",
      phone: "267.307.0207",
      states: ["PA"],
      photo: "assets/img/company/yasmeenlockettheadshot.jpg",
    },
    {
      name: "Julia Jackson",
      position: "Agent",
      email: 'jjuluia@gmail.com',
      phone: "215.869.8555",
      photo: "assets/img/company/juliajackson.jpg",
      states: ["PA", "NYC"],
    },
    {
      name: "Johane Belony",
      position: "Agent",
      email: 'jbclahar@gmail.com',
      phone: "646.326.1859",
      photo: "assets/img/company/johanebelony.jpeg",
      states: ['PA']
    },
    {
      name: "Dana McGuinness Bonanno",
      position: "Agent",
      email: 'dana.mcguinness@gmail.com',
      phone: "570.401.8080",
      photo: "assets/img/company/danamcguinness.png",
    },
    {
      name: "Johanna Daye",
      position: "Agent",
      email: 'jwdaye@gmail.com',
      phone: "610.909.8245",
      photo: "assets/img/company/joannadaye.jpeg",
    },
    {
      name: "Eric Murchison",
      position: "Agent",
      email: 'ericmurchison@icloud.com',
      phone: "215.416.7457",
      photo: "assets/img/company/ericmurchison.jpg",
    },
    {
      name: "Dorothy Gibbons",
      position: "Agent",
      email: 'malana64@gmail.com',
      phone: "215.961.7130",
      photo: "assets/img/company/dorothygibbons.jpg",
    },
    {
      name: "Jakai Bishop",
      position: "Agent",
      email: 'jakai01@gmail.com',
      phone: "215.768.7995",
      photo: "assets/img/company/jakaibishop.png",
    },
    {
      name: "Douglas J Nesmith",
      position: "Agent",
      email: 'dn210@msn.com',
      phone: "267.716.5358",
      photo: "assets/img/company/douglasnesmith.png",
    },
    {
      name: "Angel Freeburn",
      position: "Agent",
      phone: "267.213.5258",
      email: 'investorsfriendlyagent@gmail.com',
      photo: "assets/img/company/angelfreeburn.jpg",
      states: ['PA']
    },
    {
      name: "Lauren Felton",
      position: "Agent",
      phone: "610.551.4844",
      email: 'laurencierra.mcre@gmail.com',
      photo: "assets/img/company/laurenfelton.jpg",
      states: ["NYC", "MD"],
    },
    {
      name: "Towanda Allen",
      position: "Agent",
      email: 'towandaallen2@gmail.com',
      phone: "484.410.9036",
      photo: "assets/img/company/towandaallen.png",
      states: ['PA']
    },
    {
      name: "Nalin Passio",
      position: "Agent",
      email: 'nalin.passio@gmail.com',
      phone: "267.230.7611",
      photo: "assets/img/company/nalinpassio.png",
      states: ['PA']
    },
    {
      name: "Iris Felder",
      position: "Agent",
      email: 'iris.felder@gmail.com',
      phone: "267.259.6915",
      photo: "assets/img/company/irisfelder.jpg",
    },
    // {
    //   name: "Jadeane Daye",
    //   position: "Agent",
    //   phone: "267.716.8506",
    //   email: "exitwfgjd@gmail.com",
    //   photo: "assets/img/logo-white.png",
    //   states: ["PA"],
    // },
    {
      name: "Candice Wattley",
      position: "Agent",
      phone: "215.837.0882",
      email: "candiw4@verizon.net",
      photo: "assets/img/company/c_wattley.png",
      states: ["PA"],
    },


  ];

  const teamTiles = teamInfo.map((member) => {
    return (
      <div class="item text-center wow fadeInUp">
        <div class="image-holder">
          <img src={member.photo} alt={`${member.name} - ${member.position}`} />
        </div>
        <h3 class="team-name">{member.name}</h3>
        <span>{member.position}</span>
        <br />
        <span>{member.states?.map( state => <span style={{ padding: '5px'}}> {state} </span> )}</span>
        <br />
        <span>{member.email?.toLowerCase()}</span>
        <br></br>
        <span>{member.phone}</span>
      </div>
    );
  });

  return (
    <div class="row">
      <div class="col-12 col-lg-12 team-member-area">
        <div class="testimonial-team owl-carousel owl-theme">{teamTiles}</div>
      </div>
    </div>
  );
};

export default TeamTiles;
