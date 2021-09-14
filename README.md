# kafka
Kafka commands

If you use remote Kafka brokers
In case you use Kafka brokers and zookeeper remotely on any of the hosting services like Amazon EC2, Google Cloud or Digitalocean and want to connect to it from your local computer (produce or consume messages) you need to do following:

1. On hosting service firewall allow remote access and open ports 2181 (Zookeeper) and 9092 (Broker)

2. In the configuration file for each broker you need to adjust  advertised.listeners and set it either to DNS name or public IP address of the server where broker is hosted.

Examples
```
advertised.listeners=PLAINTEXT://186.23.16.1:9092
advertised.listeners=PLAINTEXT://ec2-54-123-123-123.compute-1.amazonaws.com:9092
```
Don't forget to uncomment this line in the configuration file!

If you use only one broker with default configuration file server.properties, do this adjustment in it. If you use multiple brokers in the cluster with multiple configuration files, make this adjustment in each of the custom configuration files.
