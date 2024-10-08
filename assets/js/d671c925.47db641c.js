"use strict";(self.webpackChunkvunet_docs=self.webpackChunkvunet_docs||[]).push([[8102],{8799:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(4848),t=n(8453);const o={sidebar_position:2},a="Roles",r={id:"NG-User-Guide-Sample-Content/user-management/roles",title:"Roles",description:"Roles refer to a collection of users who are granted specific permissions. It is to be noted that permissions are assigned to Roles and not to individual users.",source:"@site/docs/NG-User-Guide-Sample-Content/user-management/roles.md",sourceDirName:"NG-User-Guide-Sample-Content/user-management",slug:"/NG-User-Guide-Sample-Content/user-management/roles",permalink:"/vunet-docs/docs/next/NG-User-Guide-Sample-Content/user-management/roles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/vunet-docs/docs/next/NG-User-Guide-Sample-Content/user-management/users"},next:{title:"User-Specific Views",permalink:"/vunet-docs/docs/next/NG-User-Guide-Sample-Content/user-management/user-specific-views"}},l={},d=[{value:"Role Creation",id:"role-creation",level:2},{value:"Assign Permissions to a Role",id:"assign-permissions-to-a-role",level:2},{value:"Managing Password Change Permissions",id:"managing-password-change-permissions",level:3},{value:"Enabling Password Change Permissions",id:"enabling-password-change-permissions",level:4},{value:"Updating Role\u2019s Default Homepage and Users",id:"updating-roles-default-homepage-and-users",level:2},{value:"Roles Deletion",id:"roles-deletion",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"roles",children:"Roles"})}),"\n",(0,i.jsx)(s.p,{children:"Roles refer to a collection of users who are granted specific permissions. It is to be noted that permissions are assigned to Roles and not to individual users."}),"\n",(0,i.jsx)(s.p,{children:"On the Roles listing page, users with appropriate permissions can create, edit, delete, and modify the permissions of Roles."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"The users with view-only permissions for the User Management module can only see the Roles listing and view the permissions assigned to them."}),"\n",(0,i.jsxs)(s.li,{children:['For environments with LDAP integrations, customers should create LDAP roles specific to vuSmartMaps, ideally prefixed with "',(0,i.jsx)(s.code,{children:"Vunet-"}),'". This ensures that only relevant roles are pulled during LDAP synchronization, minimizing unnecessary role imports.']}),"\n"]})}),"\n",(0,i.jsx)(s.h2,{id:"role-creation",children:"Role Creation"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(4189).A+"",width:"800",height:"450"})}),"\n",(0,i.jsxs)(s.p,{children:["To create a new Role, click on the ",(0,i.jsx)(s.strong,{children:"+"})," button on the Roles listing page."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(2728).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(s.p,{children:"This will open a new page where you can enter a Role Name and select a list of users that you want to add to this group."}),"\n",(0,i.jsxs)(s.p,{children:["Also, the user role-specific homepage can be set here under ",(0,i.jsx)(s.strong,{children:"Select HomePage"}),". A specific dashboard can be set as the default landing page for this particular user role for the web app as well as for the mobile app."]}),"\n",(0,i.jsxs)(s.p,{children:["Additionally, you can set the Data Access Policy to provide granular data access controls for user roles. The details on the Data Access Policy are discussed ",(0,i.jsx)(s.a,{href:"/vunet-docs/docs/next/NG-User-Guide-Sample-Content/user-management/user-specific-views",children:"here"})," in detail."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(3715).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(s.p,{children:"Alternatively, you can link users to Roles from the Edit Role section."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(7285).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(7424).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(s.p,{children:["Once you have entered all the required information, click on the ",(0,i.jsx)(s.strong,{children:"Save"})," button to create the new Role."]}),"\n",(0,i.jsx)(s.h2,{id:"assign-permissions-to-a-role",children:"Assign Permissions to a Role"}),"\n",(0,i.jsxs)(s.p,{children:["To assign permissions to a Role, select the Role to which you want to grant permissions and click on the ",(0,i.jsx)(s.strong,{children:"Edit Role Permissions"})," icon, as shown below:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(1717).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(s.p,{children:["When you click on the ",(0,i.jsx)(s.strong,{children:"Edit Role Permissions"})," icon for a Role, a modal will appear displaying a list of modules and the permissions that can be assigned to each module."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(3831).A+"",width:"375",height:"512"})}),"\n",(0,i.jsxs)(s.p,{children:["After selecting the appropriate permissions, click on the ",(0,i.jsx)(s.strong,{children:"Save"})," button located at the bottom of the modal to save the configuration for the Role."]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Please note that when you grant 'write' permission to a module for a Role, the corresponding 'read' permission is also implicitly granted for the same module."}),"\n",(0,i.jsx)(s.li,{children:"Additionally, giving permission to one module may result in implicit permission being granted to another module. For example, granting \u2018write' permission to the Alert Rules module will also implicitly grant 'Data Model' read permission to that Role."}),"\n"]}),(0,i.jsx)(s.p,{children:"The below snapshot shows one example, where the selection of Alert Write permissions, grants read permissions for that module automatically. And similarly also grants read permission for Data Model."}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(774).A+"",width:"1920",height:"1080"})}),(0,i.jsx)(s.p,{children:"Logging in with such a user will give access to that user with a read-only view of the Data Modelling workspace."})]}),"\n",(0,i.jsx)(s.h3,{id:"managing-password-change-permissions",children:"Managing Password Change Permissions"}),"\n",(0,i.jsx)(s.p,{children:"In vuSmartMaps, administrators now have the ability to control password change permissions for end users, ensuring tighter security measures and compliance within the platform. This user guide section outlines how to utilize this feature effectively."}),"\n",(0,i.jsx)(s.h4,{id:"enabling-password-change-permissions",children:"Enabling Password Change Permissions"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Within the Edit role settings under Roles, locate the 'Miscellaneous' permission category."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Enable the 'changePassword' rule under this category to allow password changes for users assigned to this role. Deselect the option to disable password change. It is to be noted that this option is enabled by default."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(7537).A+"",width:"1366",height:"728"})}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"After configuring the permissions, save the role settings to apply the changes."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users assigned to roles with the Change Password Permission will be able to update their password with the Change Password option."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(8449).A+"",width:"1366",height:"768"})}),"\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsx)(s.li,{children:"Users assigned to roles with the Disabled Change Password permission will find the Change Password field disabled in their profile section upon login. Hovering over the disabled field will display a message informing the user that they do not have permission to change their password."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(6931).A+"",width:"1366",height:"768"})}),"\n",(0,i.jsx)(s.h2,{id:"updating-roles-default-homepage-and-users",children:"Updating Role\u2019s Default Homepage and Users"}),"\n",(0,i.jsx)(s.p,{children:"In user management, you can set a specific homepage for each user role. This means that when a user with a specific role, logs in, they will be directed to a personalized dashboard that suits their role. You can choose a different dashboard for the web app and the mobile app if desired."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["To update the default landing page, you can edit the role by clicking on the ",(0,i.jsx)(s.strong,{children:"Edit"})," button.\r\n",(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(1418).A+"",width:"1920",height:"1080"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["On clicking the ",(0,i.jsx)(s.strong,{children:"Edit"})," button, a pop-up will open, where you can modify the preference for the homepage for the web app and mobile app under ",(0,i.jsx)(s.strong,{children:"Select HomePage"}),". Similarly, Users can also be updated for the role from this pop-up on the Edit screen. Clicking ",(0,i.jsx)(s.strong,{children:"Save"})," will update the details for the specific role.\r\n",(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(3149).A+"",width:"1920",height:"1080"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"roles-deletion",children:"Roles Deletion"}),"\n",(0,i.jsx)(s.p,{children:"To delete specific Role(s), follow these steps in the User Management module:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Locate the Roles(s) you wish to delete and select the checkbox next to their names."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Click on the ",(0,i.jsx)(s.strong,{children:"Delete Roles"})," icon."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(3380).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsx)(s.li,{children:"A pop-up window will appear, asking you to confirm the deletion of the selected user(s)."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(6766).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:['In the pop-up, type "Yes" in the provided text box to confirm the deletion. Click on the ',(0,i.jsx)(s.strong,{children:"Delete Roles"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The selected Roles will be deleted."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Similarly, to delete some particular user, the ",(0,i.jsx)(s.strong,{children:"Delete Role"})," Icon can be used across that particular user."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Enter image alt description",src:n(2576).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Please note that any user with write permissions to the User Management module has the ability to delete any Role."})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6766:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/0ro_Image_24-22db770c41264bf8f7d714c062121068.jpeg"},3831:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/3YU_Image_16-89661cca000b1c8b929d4aeaab3e2262.jpeg"},2576:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/FCk_Image_25-b8c7fb0f72cc16b6e19225821d836061.jpeg"},8449:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/IR2_Image_19-93d9f934e2a5371fe2e135f808a01c28.png"},4189:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/ImportingO11ySources-c283d2e3c60237a5b5eebd1c064d6c2c.gif"},774:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/Mum_Image_17-92b9daec796fe17beb5507e0c0d6ebb5.jpeg"},7285:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/Omx_Image_13-a7146d01e11f27a135e831a506f31e48.jpeg"},3380:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/Q7f_Image_23-27d06a671fecd1ce09c93f15c0ee8ca3.jpeg"},1418:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/cGT_Image_21-a7146d01e11f27a135e831a506f31e48.jpeg"},7424:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/ff8_Image_14-ced37d4c718a4c26e0794a520b46a6f8.jpeg"},1717:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/hN4_Image_15-1a79e88f03cdc7be8fced1376c3809bb.jpeg"},2728:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/lMX_Image_11-bae2a54cdeaf7ec442e06cd18ccb34e8.jpeg"},6931:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/qBP_Image_20-14900a301189cb5a6a76d8840c1baeb4.png"},3715:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/vNU_Image_12-0f67fe6420a8342aa5e8442a2bc49a9c.jpeg"},3149:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/vaY_Image_22-893d6ee016994c489d1e0ee2492ddb23.jpeg"},7537:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/vtX_Image_18-5b3924e3007bceb0486e455c1361d6a1.png"},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var i=n(6540);const t={},o=i.createContext(t);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);