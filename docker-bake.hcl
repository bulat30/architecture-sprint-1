target "backend" {
  cache-to = [
    "type=gha,ignore-error=true,mode=max,scope=backend"
  ]
  cache-from = [
    "type=gha,scope=backend"
  ]
}
target "frontend" {
  cache-to = [
    "type=gha,ignore-error=true,mode=max,scope=frontend"
  ]
  cache-from = [
    "type=gha,scope=frontend"
  ]
}
target "auth" {
  cache-to = [
    "type=gha,ignore-error=true,mode=max,scope=auth"
  ]
  cache-from = [
    "type=gha,scope=auth"
  ]
}
target "places" {
  cache-to = [
    "type=gha,ignore-error=true,mode=max,scope=places"
  ]
  cache-from = [
    "type=gha,scope=places"
  ]
}
target "profile" {
  cache-to = [
    "type=gha,ignore-error=true,mode=max,scope=profile"
  ]
  cache-from = [
    "type=gha,scope=profile"
  ]
}
target "host" {
  cache-to = [
    "type=gha,ignore-error=true,mode=max,scope=host"
  ]
  cache-from = [
    "type=gha,scope=host"
  ]
}