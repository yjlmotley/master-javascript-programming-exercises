FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@29.7.0 jest-environment-jsdom@29.7.0 -g
RUN npm i @learnpack/learnpack@2.1.50 -g && learnpack plugins:install @learnpack/node@1.1.13
