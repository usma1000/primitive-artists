## Development

    `bundle exec jekyll serve`
    go to localhost:4000

## Deploy to GitHub Pages

    Push up new changes to master.
    Run `bin/deploy`

## To Do's
### Pre-launch ToDo

    Figure out pagination
    Set up mailchimp
    Add analytics
    Set up email account
    Add email sign up in footer

### Post-launch ToDo

    Add google ads
    Set up social media accounts
    Refactor Sass


## Media

Images can be added with a default `<img>` tag.
If you wish that an image can be enlarged on click use the image include tag. You can pass 3 variables:
- `path`: Image to show in the blog post.
- `path-detail`: Image to show when enlarging.
- `alt`: Alt text for image in blog post.

{% include image.html path="documentation/sample-image.jpg" path-detail="documentation/sample-image@2x.jpg" alt="Sample image" %}

{% highlight html %}
{% include image.html path="documentation/sample-image.jpg" path-detail="documentation/sample-image@2x.jpg" alt="Sample image" %}
{% endhighlight %}

Videos can be added and are responsive by default (4x3 by default, 16x9 with extra class).

<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://www.youtube.com/embed/vO7m8Hre72E?modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
</div>

{% highlight html %}
<div class="embed-responsive embed-responsive-16by9">
<iframe src="url-to-video" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}
