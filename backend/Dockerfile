FROM openjdk:8-jdk-alpine as builder

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle . 
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew build

FROM openjdk:8-jdk-alpine
COPY --from=builder build/libs/backend-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]