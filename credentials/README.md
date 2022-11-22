# Credentials Folder

1. Server URL or IP : http://54.200.101.218
2. SSH:  `ssh -i "csc_648_secret_key.pem" ubuntu@ec2-54-200-101-218.us-west-2.compute.amazonaws.com`
3. SSH password or key: _csc_648_secret_key.pem_
4. Database URL or IP: *(public IP)* http://54.200.101.218
5. Database port: *(default port)* 3306
6. Database username: root
7. Database password: csc_648_team_4
8. Database name: production
9. Instructions on how to use the above information:
    - Navigate into the credentials folder.
    - Make sure the key has appropriate permissions
    - Run the ssh command

> Incase you face permissions issues with the key, refer: https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-fix-permission-denied-errors/
