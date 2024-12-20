import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss'],
  standalone: false
})
export class LinkedinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// 2 ways-

// Two legged auth is not available for any use case where member data is retrieved. All calls for member data must be three legged.

// https://www.linkedin.com/developers/apps   stepn create app

// https://www.linkedin.com/company/te.com

// https://oauth.pstmn.io/v1/callback  test redirect URI

//  parameters to pass in the request body- stepn 

// grant_type=client_credentials



// scope=r_liteprofile%20 -> 'profile'

// r_emailaddress%20

// w_member_social  -> permission - visible on page

// w_member_social -> w_share

// stepn

// https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id={id}&scope=r_basicprofile  - You need to pass the "redirect_uri" parameter

// https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={id}&redirect_uri=https://oauth.pstmn.io/v1/callback&state=foobar&scope=openid profile w_member_social email&state=STATE  - correct API call 

// https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id= {id}&scope=r_basicprofile&state=STATE&redirect_uri=https://oauth.pstmn.io/v1/callback  - new

// This above API will return a code

// postman://app/oauth2/callback?code=AQSIM-KnZ3dInUIw5yjJJtFb5K9YPT1TnYpWBy1PeWU48heRIw8Mg8POVd3oBIm5UZV_DDMHmYwUhlmHc9_I_GRs21Al51I_JC2anZWF4REiV8FS1QmrTQqjL3lGvR2W_HHZkO4F6YFAtDk7T2ir9doghDVWAe5CC-hiZzvbNzSgF-hmcTWtO4bE9yWieLyPjjoPb5R8LvxuGSW2yqQ&state=foobar

// Stepn - after getting the code call below api

// https://www.linkedin.com/oauth/v2/accessToken  - need grant_type

// https://www.linkedin.com/oauth/v2/accessToken?grant_type=client_credentials&client_id={id}&client_secret={secret} - not correct

// https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&redirect_uri=https://oauth.pstmn.io/v1/callback&client_id={id}&client_secret={secret}&code=AQSIM-KnZ3dInUIw5yjJJtFb5K9YPT1TnYpWBy1PeWU48heRIw8Mg8POVd3oBIm5UZV_DDMHmYwUhlmHc9_I_GRs21Al51I_JC2anZWF4REiV8FS1QmrTQqjL3lGvR2W_HHZkO4F6YFAtDk7T2ir9doghDVWAe5CC-hiZzvbNzSgF-hmcTWtO4bE9yWieLyPjjoPb5R8LvxuGSW2yqQ  - working

// It will return this below response

// {

//     "access_token": "Atesttoken",

//     "expires_in": 5183999,

//     "scope": "email,openid,profile,w_member_social",

//     "token_type": "Bearer",

//     "Id_token": base64str"

// }

// stepn

// Now you can call any linkedapi and pass bearer token here in authorisation

// https://api.linkedin.com/v2/userinfo   - need oauth2 access token  

// {

//     "sub": "3-KYlEKIzR",

//     "email_verified": true,

//     "name": "\uD83E\uDDD1‍\uD83D\uDCBB  Sunny Gupta",

//     "locale": {

//         "country": "US",

//         "language": "en"

//     },

//     "given_name": "\uD83E\uDDD1‍\uD83D\uDCBB  Sunny",

//     "family_name": "Gupta",


//     "picture": "https://media.licdn.com/dms/image/D4D03AQEopGJiXnYxXw/profile-displayphoto-shrink_100_100/0/1699703362241?e=1706140800&v=beta&t=aZFpxjgkQkTaBE82I2ghP1gRsSf2q1MIuZZpmlYl1Qs"

// }

// https://api.linkedin.com/v2/me    - need oauth2 access token  need to check this

// dev.example.com/auth/linkedin/callback?state=foobar&code=AQTQmah11lalyH65DAIivsjsAQV5P-1VTVVebnLl_SCiyMXoIjDmJ4s6rO1VBGP5Hx2542KaR_eNawkrWiCiAGxIaV-TCK-mkxDISDak08tdaBzgUYfnTJL1fHRoDWCcC2L6LXBCR_z2XHzeWSuqTkR1_jO8CeV9E_WshsJBgE-PWElyvsmfuEXLQbCLfj8CHasuLafFpGb0glO4d7M

// https://learn.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api

// https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/plugins/autofill-plugin 
// https://api.linkedin.com/v1/people/~:(id,first-name,last-name,headline,picture-url,industry,summary,specialties,positions:(id,title,summary,start-date,end-date,is-current,company:(id,name,type,size,industry,ticker)),educations:(id,school-name,field-of-study,start-date,end-date,degree,activities,notes),associations,interests,num-recommenders,date-of-birth,publications:(id,title,publisher:(name),authors:(id,name),date,url,summary),patents:(id,title,summary,number,status:(id,name),office:(name),inventors:(id,name),date,url),languages:(id,language:(name),proficiency:(level,name)),skills:(id,skill:(name)),certifications:(id,name,authority:(name),number,start-date,end-date),courses:(id,name,number),recommendations-received:(id,recommendation-type,recommendation-text,recommender),honors-awards,three-current-positions,three-past-positions,volunteer) - not working currently
