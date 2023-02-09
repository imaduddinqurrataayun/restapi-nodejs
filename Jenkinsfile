pipeline {
    node {
        checkout scm
        def customImage = docker.build("imaduddinqurrataayun:restapi:1.0")
        customImage.push()
    }
}
