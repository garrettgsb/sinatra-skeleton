# Homepage (Root path)
get '/' do
  erb :index
end

get '/kitchensink' do
  erb :'kitchen-sink'
end

get '/aquarium' do
  erb :'aquarium'
end

get '/memo' do
  erb :'memoscope'
end

get '/get_deck' do
  json Card.order(:score)
end
