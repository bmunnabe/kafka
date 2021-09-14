// Start ZooKeeper
    .\bin\windows\kafka-server-start.bat .\config\zookeeper.properties

// START Kafka Server
    .\bin\windows\kafka-server-start.bat .\config\server.properties

// Creating Topics
    .\bin\windows\kafka-topics.bat --create --bootstrap-server 127.0.0.1:9092 --topic shifa
   
//  list/show all topics 
    .\bin\windows\kafka-topics.bat --describe --zookeeper localhost:2181 --topic shifa
    
// Producer
    .\bin\windows\kafka-console-producer.bat --broker-list localhost:9092 --topic shifa
  
// Listen to topic
    .\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic shifa
    
// Listen topic FROM BEGINNING (will listen if it already consumed by another consumer)
    .\bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic shifa --from-beginning



Consumer
Producer
Topic
ZooKeeper
ZooKeeper Enemble
Broker
Broker Cluster
Kafka Cluster
Partition
Partition Leader (Read/Write operation handle, make sync/replica on all)
Partition Follower
Controller













