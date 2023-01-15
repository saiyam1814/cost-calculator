##  Pricing calculator 
This is the calculator to get the cost estimates for your resources running on [Civo](https://civo.com)

You can access the prodcution version [here](https://cost.e0b105b9-6be2-4a1d-9631-df05f26ac835.k8s.civo.com/)

##Run it on Kubernetes

You can run this project directly by running ot on Kubernetes:
```
kubectl create ns cost
kubectl apply -f https://raw.githubusercontent.com/saiyam1814/cost-calculator/main/deploy/deploy.yaml
```
In order to access the application you can check the service NodePort and access at `NODE_IP:NODEPORT`.
```
kubectl get svc -n cost
NAME              TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
cost-calculator   NodePort   10.106.155.146   <none>        80:32267/TCP   7s
```
You can also build form the Dockerfile and then run it as a docker container.


## Local Development
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm ci
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
