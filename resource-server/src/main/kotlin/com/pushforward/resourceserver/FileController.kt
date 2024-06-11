package com.pushforward.resourceserver

import org.springframework.core.io.Resource
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class FileController {
    @PostMapping("files", consumes = [MediaType.MULTIPART_FORM_DATA_VALUE], produces = [MediaType.TEXT_PLAIN_VALUE])
    fun post(@RequestPart file: Resource, @RequestPart content: Resource, @RequestPart blob: Resource): String {
        println(file.contentAsByteArray.toString(Charsets.UTF_8))
        println(content.contentAsByteArray.toString(Charsets.UTF_8))
        println(blob.contentAsByteArray.toString(Charsets.UTF_8))
        return """
            ${file.contentAsByteArray.toString(Charsets.UTF_8)}
            ${content.contentAsByteArray.toString(Charsets.UTF_8)}
            ${blob.contentAsByteArray.toString(Charsets.UTF_8)}
            """.trimIndent()
    }
}