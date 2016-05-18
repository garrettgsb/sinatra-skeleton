# Homepage (Root path)
get '/' do
  @song = Song.new
  @songs = Song.all
  erb :index
end

post '/newsong' do
  @song = Song.create(
  artist: params[:artist],
  title: params[:title],
  url: params[:url]
  )
  if @song.save
    redirect '/'
  else
    redirect '/derp'
  end #if/else
end


get '/derp' do
  erb :derp
end #derp
