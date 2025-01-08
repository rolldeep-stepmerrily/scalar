import { describe, expect, it } from 'vitest'

import { parseCurlCommand } from './parse-curl'

describe('parseCurlCommand', () => {
  it('parses the URL correctly', () => {
    const curlCommand = 'curl http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.url).toBe('http://example.com')
  })

  it('parses the method correctly', () => {
    const curlCommand = 'curl -X POST http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.method).toBe('post')
  })

  it('parses body data correctly', () => {
    const curlCommand = 'curl -d "name=example" http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.body).toBe('name=example')
  })

  it('parses query parameters correctly', () => {
    const curlCommand = 'curl http://example.com?name=example'
    const result = parseCurlCommand(curlCommand)
    expect(result.queryParameters).toStrictEqual([
      { key: 'name', value: 'example' },
    ])
  })

  it('handles URL without --url flag', () => {
    const curlCommand = 'curl http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.url).toBe('http://example.com')
  })

  it('parses headers correctly', () => {
    const curlCommand =
      'curl -H "Content-Type: application/json" http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toStrictEqual({ 'Content-Type': 'application/json' })
  })

  it('parses authentication correctly', () => {
    const curlCommand = 'curl -u user:password http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toHaveProperty('Authorization')
  })

  it('parses cookies correctly', () => {
    const curlCommand = 'curl -b "name=value" http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toHaveProperty('Cookie', 'name=value')
  })

  it.only('parses multipart form data correctly', () => {
    const curlCommand =
      'curl -F "name=marc" -F "company=scalar" http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toContain({ 'Content-Type': 'multipart/form-data' })
    expect(result.body).toEqual([
      { key: 'name', value: 'marc', enabled: true },
      { key: 'company', value: 'scalar', enabled: true },
    ])
  })

  it('parses multipart form data with file correctly', () => {
    const curlCommand =
      'curl -F "file=@photo.jpg" -F "description=My Photo" http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toContain({ 'Content-Type': 'multipart/form-data' })
    expect(result.body).toEqual({
      file: '@photo.jpg',
      description: 'My Photo',
    })
  })

  it('parses URL encoded form data correctly', () => {
    const curlCommand =
      'curl --data-urlencode "name=John Doe" --data-urlencode "age=25" http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toContain({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    expect(result.body).toBe('name=John%20Doe&age=25')
  })

  it('handles binary file upload correctly', () => {
    const curlCommand = 'curl --data-binary "@file.bin" http://example.com'
    const result = parseCurlCommand(curlCommand)
    expect(result.body).toBe('@file.bin')
    expect(result.binaryUpload).toBe(true)
  })

  it('handles XML content type correctly', () => {
    const curlCommand = `curl -H "Content-Type: application/xml" -d "<user><name>John</name></user>" http://example.com`
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toContain({ 'Content-Type': 'application/xml' })
    expect(result.body).toBe('<user><name>John</name></user>')
  })

  it('handles YAML content type correctly', () => {
    const curlCommand = `curl -H "Content-Type: application/yaml" -d "name: John\nage: 25" http://example.com`
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toContain({ 'Content-Type': 'application/yaml' })
    expect(result.body).toBe('name: John\nage: 25')
  })

  it('handles EDN content type correctly', () => {
    const curlCommand = `curl -H "Content-Type: application/edn" -d "{:name \"John\" :age 25}" http://example.com`
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toContain({ 'Content-Type': 'application/edn' })
    expect(result.body).toBe('{:name "John" :age 25}')
  })

  it('handles HTML content type correctly', () => {
    const curlCommand = `curl -H "Content-Type: text/html" -d "<html><body>Hello</body></html>" http://example.com`
    const result = parseCurlCommand(curlCommand)
    expect(result.headers).toContain({ 'Content-Type': 'text/html' })
    expect(result.body).toBe('<html><body>Hello</body></html>')
  })
})
