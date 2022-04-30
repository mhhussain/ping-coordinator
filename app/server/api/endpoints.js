import fs from 'fs';

export default data => {
  if (process.env.IN_KUBERNETES === '1') {
    const authToken = fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token', 'utf8');
    return $fetch(
      `https://kubernetes.default.svc/api/v1/namespaces/${process.env.NAMESPACE}/endpoints`,
      {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          rejectUnauthorized: false,
        }
      }
    );
  } else {
    //return Math.ceil(Math.random() * 100) > 50 ? DATA[0] : DATA[1];
    return DATA[0];
  }
};

const DATA = [
  {
    "kind": "EndpointsList",
    "apiVersion": "v1",
    "metadata": {
      "resourceVersion": "286966326"
    },
    "items": [
      {
        "metadata": {
          "name": "pinger",
          "namespace": "mhussain",
          "uid": "6d9722e5-2c39-46c8-a28f-30c8245ff8da",
          "resourceVersion": "286966290",
          "creationTimestamp": "2022-04-30T00:41:51Z",
          "annotations": {
            "endpoints.kubernetes.io/last-change-trigger-time": "2022-04-30T04:32:56Z"
          }
        },
        "subsets": [
          {
            "addresses": [
              {
                "ip": "10.20.101.192",
                "nodeName": "ip-10-20-101-120.us-east-2.compute.internal",
                "targetRef": {
                  "kind": "Pod",
                  "namespace": "mhussain",
                  "name": "pinger-deployment-d467585c6-vgx9m",
                  "uid": "96f4ff1a-b8c4-4074-bec9-fa9403daa1bd",
                  "resourceVersion": "286966288"
                }
              },
              {
                "ip": "10.20.101.219",
                "nodeName": "ip-10-20-101-148.us-east-2.compute.internal",
                "targetRef": {
                  "kind": "Pod",
                  "namespace": "mhussain",
                  "name": "pinger-deployment-d467585c6-xd586",
                  "uid": "3e4e2332-53b8-446a-90d3-142f29ff1a29",
                  "resourceVersion": "286964360"
                }
              },
              {
                "ip": "10.20.101.95",
                "nodeName": "ip-10-20-101-120.us-east-2.compute.internal",
                "targetRef": {
                  "kind": "Pod",
                  "namespace": "mhussain",
                  "name": "pinger-deployment-d467585c6-j8rb5",
                  "uid": "10dbc541-ec40-425a-bbef-f49d3c60911f",
                  "resourceVersion": "286966281"
                }
              }
            ],
            "ports": [
              {
                "port": 5005,
                "protocol": "TCP"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "kind": "EndpointsList",
    "apiVersion": "v1",
    "metadata": {
      "resourceVersion": "286966326"
    },
    "items": [
      {
        "metadata": {
          "name": "pinger",
          "namespace": "mhussain",
          "uid": "6d9722e5-2c39-46c8-a28f-30c8245ff8da",
          "resourceVersion": "286966290",
          "creationTimestamp": "2022-04-30T00:41:51Z",
          "annotations": {
            "endpoints.kubernetes.io/last-change-trigger-time": "2022-04-30T04:32:56Z"
          }
        },
        "subsets": [
          {
            "addresses": [
              {
                "ip": "10.20.101.192",
                "nodeName": "ip-10-20-101-120.us-east-2.compute.internal",
                "targetRef": {
                  "kind": "Pod",
                  "namespace": "mhussain",
                  "name": "pinger-deployment-d467585c6-vgx9m",
                  "uid": "96f4ff1a-b8c4-4074-bec9-fa9403daa1bd",
                  "resourceVersion": "286966288"
                }
              }
            ],
            "ports": [
              {
                "port": 5005,
                "protocol": "TCP"
              }
            ]
          }
        ]
      }
    ]
  }
];