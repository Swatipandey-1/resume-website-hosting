☁️ Cloud Resume Project — AWS | CI/CD | Serverless
🚀 Overview
This project demonstrates deploying a production-grade personal resume website using Amazon Web Services (AWS) and modern DevOps practices.
The website is hosted on Amazon S3, delivered through CloudFront CDN, secured with HTTPS, and automatically deployed using GitHub Actions CI/CD pipeline on every code push.
________________________________________ 
🏗 Architecture
 
________________________________________
🧰 Tech Stack
Category	Tools
Frontend	HTML, CSS, JavaScript
Hosting	Amazon S3
CDN & SSL	CloudFront, ACM
CI/CD	GitHub Actions
Security	IAM, HTTPS
DNS (Optional)	Route 53
Monitoring	CloudWatch
________________________________________
✅ Key Features
✔ Static resume website hosted on S3  
✔ Secure HTTPS access using CloudFront  
✔ Global CDN performance  
✔ Serverless backend view counter  
✔ DynamoDB atomic counter  
✔ CI/CD automation  
✔ Infrastructure as Code (AWS SAM)  
✔ Free-tier optimized design  
✔ Production-ready architecture  
________________________________________
🔄 CI/CD Workflow
On every push to the main branch, the following happens automatically:
1.	Code is pulled into GitHub Actions runner
2.	Frontend files are synced to S3
3.	CloudFront cache is invalidated
4.	Updated website is live globally
GitHub Actions File
.github/workflows/deploy.yml
________________________________________
🔐 Security
•	IAM least privilege principle
•	Secrets management via GitHub Actions
•	HTTPS enforced using CloudFront & ACM
•	Public access restricted at S3 level
________________________________________
 🚀 Project Implementation Summary
1.	Phase 1 — Frontend & Hosting
•	Designed resume website using HTML and Bootstrap.
•	Hosted website in Amazon S3.
•	Configured CloudFront as CDN.
•	Restricted S3 access to CloudFront only.
•	Purchased custom domain and configured DNS via Route 53.

2.	Phase 2 — Development Setup
            Configured developer environment with:
•	Python
•	AWS CLI
•	AWS SAM CLI
•	HTTPS
•	VS Code with AWS and Python extensions

3.	Phase 3 — Backend View Counter
             This was the most technically intensive part of the project.
            Concepts implemented:
•	API Gateway → Lambda integration
•	DynamoDB data modeling
•	Atomic counter design
•	Python-based Lambda handler
•	JSON response handling
•	CORS configuration
•	Frontend API integration

4.	Phase 4 — CI/CD Pipelines
           Frontend Pipeline (GitHub Actions)
•	Push to `main` branch
•	Files auto-deployed to S3
•	CloudFront cache invalidated

         Backend Pipeline (AWS CodePipeline + SAM)
•	Build and deploy serverless backend
•	Automated testing using payload injection
•	Full infrastructure deployed as code.
________________________________________
 📈 Learnings
•	Serverless architecture design
•	AWS integration patterns
•	Infrastructure-as-Code using SAM
•	CI/CD workflows for cloud projects
•	Debugging distributed systems
•	Cloud security best practices
•	Real-world DevOps deployment workflows
________________________________________
🔮 Future Enhancements
•	Terraform-based deployment
•	Visitor analytics dashboard
•	WAF protection
•	Canary deployments
•	Monitoring with CloudWatch dashboards
•	OIDC for GitHub authentication
________________________________________


