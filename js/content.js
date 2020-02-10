chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "github_load") {
      document.querySelector(".merge-message > .select-menu.d-inline-block").remove();
    } else if (request.message === "gitlab_vn_load") {
      document.querySelector(".media-body span.btn-group").remove();
    } else if (request.message === "gitlab_vn_old_load") {
      document.querySelector(".accept-merge-holder > .clearfix > .accept-action ").remove()
    }
  }
);
