import { Component, OnInit } from '@angular/core';
import { PortfolioServicesService } from 'src/app/Services/portfolio-services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  ProfileData: any=[];
  userProfile: any;
  skills: any;
  projects: any;

  constructor(private profileService:PortfolioServicesService){ }
  ngOnInit(): void {
    this.getProfileData();
  }
  getProfileData() {
   
    this.profileService.getProfile().subscribe({
      next : (data)=>{
        this.ProfileData=data;
        this.userProfile = this.ProfileData?.userProfiles;
        this.skills = this.ProfileData?.skills;
        this.projects= this.ProfileData.projects;

      },
      error :(err)=>console.error(err)
    })
  }


}
