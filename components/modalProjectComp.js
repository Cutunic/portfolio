const modalProjectComp = `
<div id="modal-project-background" class="modal-project-background" onclick="onClickCloseProject(event)">
    <div id="modal-project-container" class="modal-project-container">

        <div id="modal-bar-x" class="modal-bar-x" onclick="onClickCloseXProject(event)"><i class="fas fa-times"></i></div>

        <div id="project-carousel" class="project-carousel">
            <div class="carousel-left-arrow" onclick="onCarouselClick('+')"><i class="fas fa-angle-left"></i></div>
            <div class="carousel-right-arrow" onclick="onCarouselClick('-')"><i class="fas fa-angle-right"></i></div>

        </div>

        <div id="project-name" class="project-text project-name">
            <h6>Title:</h6>
            <p></p>
        </div>

        <div id="project-desc" class="project-text  project-desc">
            <h6>Description:</h6>
            <p></p>
        </div>

        <div id="project-learn" class="project-text  project-learn">
            <h6>What was Goal?</h6>
            <p></p>
        </div>
        <div id="project-problem" class="project-text  project-problem">
            <h6>Problems i faced?</h6>
            <p></p>
        </div>

        <div id="project-link" class="project-text  project-link">
            <a target="_blank" href="" class="btn-project-link btn-preview">Preview link</a>
        </div>
        <div id="project-code-link" class="project-text  project-code-link">
            <a target="_blank" href="" class="btn-project-link btn-code">Code link</a>
        </div>

    </div>
</div>
`;