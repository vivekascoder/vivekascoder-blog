# CI/CD With Github Actions

My file `./worlfows/deploy.yml` connects with the VM using ssh and then goes
to the project directory and then pull the changes from the master branch
of this repository and generates a static site by running `yarn generate`.