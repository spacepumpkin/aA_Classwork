require 'rack'

## Simplest Rack app server
# Rack::Server.start(
#     app: Proc.new do |env|
#         [
#             '200',
#             {'Content-Type': 'text/html'},
#             ['hello world']
#         ]
#     end
# )


## Creating app first, then using Rack Request & Response
# app = Proc.new do |env|
#     req = Rack::Request.new(env)
#     res = Rack::Response.new
#     res['Content-Type'] = 'text/html'
#     res.write('Hello world!')
#     res.finish
# end

# Rack::Server.start(
#     app: app,
#     Port: 3000
# )

# Returning the path requested as string
app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    res['Content-Type'] = 'text/html'
    res.write(req.path) # get path
    res.finish
end

Rack::Server.start(
    app: app,
    Port: 3000
)